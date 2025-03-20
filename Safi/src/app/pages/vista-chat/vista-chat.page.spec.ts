import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaChatPage } from './vista-chat.page';

describe('VistaChatPage', () => {
  let component: VistaChatPage;
  let fixture: ComponentFixture<VistaChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
