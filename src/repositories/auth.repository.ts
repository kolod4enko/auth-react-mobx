import axios from 'axios';
import { UserDto } from '../dto/user.dto';
import { API } from '../constants/api';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { Response } from './types';

class _AuthRepository {
  login = (payload: LoginDto): Response<UserDto> => axios.post<UserDto>(API.auth.login, payload);

  register = (payload: RegisterDto): Response<UserDto> => axios.post<UserDto>(API.auth.register, payload);

  logout = (): Response<string> => axios.post<string>(API.auth.logout);
}

export const AuthRepository = new _AuthRepository();
