import { Controller, Get, Post, Delete, Put, Param, Patch,Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service'
import {Movie} from './entities/movie.entity'


@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] | undefined{
        return this.moviesService.getAll()
    }

    /* @Get("search")
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after : ${searchingYear}`
    } */

    @Get(":id")
    getOne(@Param('id') movieId: string): Movie | undefined {
        return this.moviesService.getOne(movieId)
    }

    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') movieId: string){
        return this.moviesService.deleteOne(movieId);
    }
    
    // @Put : 전체 업데이트
    // @ Patch: 일부 업데이트
    @Put(':id')
    updateAll(@Param('id') movieId: string){
        return `This will update a movie with id : ${movieId}`;
    }

    @Patch(':id')
    update(@Param('id') movieId: string, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
    }

    
}
