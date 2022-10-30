import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'List all users' })
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one users' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
}
