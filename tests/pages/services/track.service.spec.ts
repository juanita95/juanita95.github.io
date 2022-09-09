import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TrackService } from '../../../src/app/pages/services/track-services/track.service';

describe('TrackService', () => {
  let service: TrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get user', () => {

    service.getTracks('reggaeton').subscribe((tracks) => {
      expect(tracks.length).toBe(20);
    })
  });
});
