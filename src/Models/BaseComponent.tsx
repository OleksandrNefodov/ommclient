import React from 'react';

export interface IBaseState {
    mobile: boolean,
}


export interface IBaseComponent {
    isMobile(): boolean;

    getAsync<TResponse>(endpoint: string): Promise<TResponse>;
    postAsync<TResponse>(endpoint: string, request: any | null): Promise<TResponse>;
}


export default class BaseComponent<TProps = {}, TState = {}> extends React.PureComponent<TProps, TState> implements IBaseComponent {
    isMobile(): boolean {
        // return window.innerWidth < (window.screen.width * 0.7);
        return window.innerWidth < 1024;
    }

    getAsync<TResponse>(endpoint: string): Promise<TResponse> {
        throw new Error("Method not implemented.");
    }

    postAsync<TResponse>(endpoint: string, request: any): Promise<TResponse> {
        throw new Error("Method not implemented.");
    }
}


