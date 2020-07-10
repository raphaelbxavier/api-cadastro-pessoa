import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePessoaComponent } from './update-pessoa.component';

describe('UpdatePessoaComponent', () => {
  let component: UpdatePessoaComponent;
  let fixture: ComponentFixture<UpdatePessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
