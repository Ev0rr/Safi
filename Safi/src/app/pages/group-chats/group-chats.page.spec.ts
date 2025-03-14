import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupChatsPage } from './group-chats.page';

describe('GroupChatsPage', () => {
  let component: GroupChatsPage;
  let fixture: ComponentFixture<GroupChatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
