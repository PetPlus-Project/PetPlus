import { TestBed } from '@angular/core/testing';

import { CarrinhoService } from './carrinho.service';
import { Component } from '@angular/core';



describe('CarrinhoService', () => {
  let service: CarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});