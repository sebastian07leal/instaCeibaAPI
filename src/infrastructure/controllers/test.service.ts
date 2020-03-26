import {Injectable, Inject } from '@nestjs/common';
import { RepositoryUserCount } from 'src/domain/userCount/ports/repository.userCount';

@Injectable()
export class testService {

  constructor(@Inject('RepositoryUserCount') private ref: RepositoryUserCount) {}

  hi() {
    return this.ref.listed();
  }

}