import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcleDetailComponent } from './artcle-detail.component';

describe('ArtcleDetailComponent', () => {
  let component: ArtcleDetailComponent;
  let fixture: ComponentFixture<ArtcleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtcleDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtcleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
