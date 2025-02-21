import { GetUserService } from './get/service';
import { RegisterUserService } from './register/service';
import { SignInUserService } from './sign-in/service';

export { GetUserService, RegisterUserService, SignInUserService };

export const userServices = [GetUserService, RegisterUserService, SignInUserService];
