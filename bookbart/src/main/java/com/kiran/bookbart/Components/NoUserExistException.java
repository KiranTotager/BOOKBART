package com.kiran.bookbart.Components;


public class NoUserExistException extends RuntimeException{
    public NoUserExistException(String message){
        super(message);
    }
}
