import User from '../models/User.js';
import { BookDocument } from '../models/Book.js';
import { signToken, AuthenticationError } from '../utils/auth.js';


interface IUser {
  email: string | null;
  password: string | null;
  username: string | null;
  savedBooks: BookDocument[];
  bookCount: number | null;
  isCorrectPassword(password: string): Promise<boolean>;
}

const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, context: any): Promise<IUser[] | null> => {
      if (context.user) {
        return User.find({});
      }
      throw new AuthenticationError('Could not authenticate user.');
    },

  },
  Mutation: {
    addUser: async (_parent: any, args: any): Promise<{ token: string, user: IUser } | null> => {
      const user = await User.create(args);
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);

      // Return the token and the user
      return { token, user };
    },
    login: async (_parent: any, { email, password }: any): Promise<{ token: string, user: IUser } | null> => {
      // Find a user with the provided email
      const user = await User.findOne({ email });

      // If no user is found, throw an AuthenticationError
      if (!user) {
        throw new AuthenticationError('Could not authenticate user.');
      }

      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, throw an AuthenticationError
      if (!correctPw) {
        throw new AuthenticationError('Could not authenticate user.');
      }
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);

      // Return the token and the user
      return { token, user };
    },
    addBook: async (_parent: any, { bookInput }: { bookInput: BookDocument }, context: any): Promise<IUser | null> => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: bookInput } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('Could not authenticate user.');
    },
    removeBook: async (_parent: any, { bookId }: { bookId: string }, context: any): Promise<IUser | null> => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('Could not authenticate user.');
    },
  },
};

export default resolvers;
