import { Controller, Get, Post, Delete, Put, Param, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies"
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string){
        return `This will return a movie with id : ${movieId}`
    }

    @Post()
    create(){
        return "This will create a movie"
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return `This will delete a movie with id : ${movieId}`
    }
    
    // @Put : 전체 업데이트
    // @ Patch: 일부 업데이트
    @Put('/:id')
    updateAll(@Param('id') movieId: string){
        return `This will update a movie with id : ${movieId}`;
    }

    @Patch('/:id')
    update(@Param('id') movieId: string){
        return `This will update a movie with id : ${movieId}`;
    }
}
