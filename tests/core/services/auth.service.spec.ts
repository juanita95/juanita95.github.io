import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../src/app/core/services/auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get user', () => {
    const user = {
      "display_name" : "Juanita Aranzazu Aguirre",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/31fe7sl5k43xy6bk5mbmmsvtl23m"
      },
      "followers" : {
        "href" : null,
        "total" : 0
      },
      "href" : "https://api.spotify.com/v1/users/31fe7sl5k43xy6bk5mbmmsvtl23m",
      "id" : "31fe7sl5k43xy6bk5mbmmsvtl23m",
      "images" : [ ],
      "type" : "user",
      "uri" : "spotify:user:31fe7sl5k43xy6bk5mbmmsvtl23m"
    };
    service.getUser().subscribe((auth) => {
      expect(auth).toBe(user);
    })
  });
});
