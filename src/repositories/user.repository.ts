import axios from 'axios';
import { UserDto } from '../dto/user.dto';
import { API } from '../constants/api';
import { Response } from './types';

class _UserRepository {
  current = (token: string): Response<UserDto> => axios.post<UserDto>(API.user.current, token);
}

export const UserRepository = new _UserRepository();
