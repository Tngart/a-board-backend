import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponseDto } from 'core/dto';

export class ErrorException extends HttpException {
  static BAD_REQUEST = () =>
    new ErrorException(
      {
        code: 'ERR001',
        message: 'Bad Request',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );

  static BAD_REQUEST_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'ERR001',
        message: message || 'Bad Request',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );
  };

  static UNAUTHORIZED = () =>
    new ErrorException(
      {
        code: 'ERR002',
        message: 'Unauthorized',
        success: false,
      },
      HttpStatus.UNAUTHORIZED,
    );

  static FORBIDDEN = () =>
    new ErrorException(
      {
        code: 'ERR003',
        message: 'Forbidden',
        success: false,
      },
      HttpStatus.FORBIDDEN,
    );

  static FORBIDDEN_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'ERR003',
        message: message || 'Forbidden',
        success: false,
      },
      HttpStatus.FORBIDDEN,
    );
  };

  static INTERNAL_SERVER_ERROR = () =>
    new ErrorException(
      {
        code: 'ERR004',
        message: 'Internal Server Error',
        success: false,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );

  static INTERNAL_SERVER_ERROR_WITH = ({ data }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'ERR004',
        message: 'Internal Server Error',
        success: false,
        data,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  };

  static NOT_FOUND = () =>
    new ErrorException(
      {
        code: 'ERR005',
        message: 'Not Found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static NOT_FOUND_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'ERR005',
        message: message || 'Not Found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );
  };

  static CONFLICT_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'ERR006',
        message,
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };
}
