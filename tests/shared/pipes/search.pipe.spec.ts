import { SearchPipe } from '../../../src/app/shared/pipes/search.pipe';

describe('SearchPipe', () => {

  it('create an instance', () => {
    const pipe = new SearchPipe();
    const items: any[] = [];
    const trackOne = {
      "album" : {
        "album_type" : "ALBUM",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0eHQ9o50hj6ZDNBt6Ys1sD"
          },
          "href" : "https://api.spotify.com/v1/artists/0eHQ9o50hj6ZDNBt6Ys1sD",
          "id" : "0eHQ9o50hj6ZDNBt6Ys1sD",
          "name" : "Yandel",
          "type" : "artist",
          "uri" : "spotify:artist:0eHQ9o50hj6ZDNBt6Ys1sD"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6t3uUCp5kGlcXKmSfDl3Ul"
        },
        "href" : "https://api.spotify.com/v1/albums/6t3uUCp5kGlcXKmSfDl3Ul",
        "id" : "6t3uUCp5kGlcXKmSfDl3Ul",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27357e9af9d4640f332880ffa5e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0257e9af9d4640f332880ffa5e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485157e9af9d4640f332880ffa5e",
          "width" : 64
        } ],
        "name" : "De Líder a Leyenda",
        "release_date" : "2013-11-05",
        "release_date_precision" : "day",
        "total_tracks" : 17,
        "type" : "album",
        "uri" : "spotify:album:6t3uUCp5kGlcXKmSfDl3Ul"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0eHQ9o50hj6ZDNBt6Ys1sD"
        },
        "href" : "https://api.spotify.com/v1/artists/0eHQ9o50hj6ZDNBt6Ys1sD",
        "id" : "0eHQ9o50hj6ZDNBt6Ys1sD",
        "name" : "Yandel",
        "type" : "artist",
        "uri" : "spotify:artist:0eHQ9o50hj6ZDNBt6Ys1sD"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7tETQjUDr6hqeJVd0WyuhH"
        },
        "href" : "https://api.spotify.com/v1/artists/7tETQjUDr6hqeJVd0WyuhH",
        "id" : "7tETQjUDr6hqeJVd0WyuhH",
        "name" : "El General Gadiel",
        "type" : "artist",
        "uri" : "spotify:artist:7tETQjUDr6hqeJVd0WyuhH"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 191920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSD11300340"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7hDXp1xU9PGPSXsdt63J91"
      },
      "href" : "https://api.spotify.com/v1/tracks/7hDXp1xU9PGPSXsdt63J91",
      "id" : "7hDXp1xU9PGPSXsdt63J91",
      "is_local" : false,
      "name" : "zundada",
      "popularity" : 47,
      "preview_url" : "https://p.scdn.co/mp3-preview/1fd55a01785de6280236a3ece83bbb3bc697e1c5?cid=708f3214cf2b4fafaa2a7907fa2553c6",
      "track_number" : 15,
      "type" : "track",
      "uri" : "spotify:track:7hDXp1xU9PGPSXsdt63J91"
    }

    const trackTwo = {
      "album" : {
        "album_type" : "ALBUM",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0eHQ9o50hj6ZDNBt6Ys1sD"
          },
          "href" : "https://api.spotify.com/v1/artists/0eHQ9o50hj6ZDNBt6Ys1sD",
          "id" : "0eHQ9o50hj6ZDNBt6Ys1sD",
          "name" : "Yandel",
          "type" : "artist",
          "uri" : "spotify:artist:0eHQ9o50hj6ZDNBt6Ys1sD"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6t3uUCp5kGlcXKmSfDl3Ul"
        },
        "href" : "https://api.spotify.com/v1/albums/6t3uUCp5kGlcXKmSfDl3Ul",
        "id" : "6t3uUCp5kGlcXKmSfDl3Ul",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27357e9af9d4640f332880ffa5e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0257e9af9d4640f332880ffa5e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485157e9af9d4640f332880ffa5e",
          "width" : 64
        } ],
        "name" : "monelo",
        "release_date" : "2013-11-05",
        "release_date_precision" : "day",
        "total_tracks" : 17,
        "type" : "album",
        "uri" : "spotify:album:6t3uUCp5kGlcXKmSfDl3Ul"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0eHQ9o50hj6ZDNBt6Ys1sD"
        },
        "href" : "https://api.spotify.com/v1/artists/0eHQ9o50hj6ZDNBt6Ys1sD",
        "id" : "0eHQ9o50hj6ZDNBt6Ys1sD",
        "name" : "Yandel",
        "type" : "artist",
        "uri" : "spotify:artist:0eHQ9o50hj6ZDNBt6Ys1sD"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7tETQjUDr6hqeJVd0WyuhH"
        },
        "href" : "https://api.spotify.com/v1/artists/7tETQjUDr6hqeJVd0WyuhH",
        "id" : "7tETQjUDr6hqeJVd0WyuhH",
        "name" : "El General Gadiel",
        "type" : "artist",
        "uri" : "spotify:artist:7tETQjUDr6hqeJVd0WyuhH"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 191920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSD11300340"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7hDXp1xU9PGPSXsdt63J91"
      },
      "href" : "https://api.spotify.com/v1/tracks/7hDXp1xU9PGPSXsdt63J91",
      "id" : "7hDXp1xU9PGPSXsdt63J91",
      "is_local" : false,
      "name" : "200 copas",
      "popularity" : 47,
      "preview_url" : "https://p.scdn.co/mp3-preview/1fd55a01785de6280236a3ece83bbb3bc697e1c5?cid=708f3214cf2b4fafaa2a7907fa2553c6",
      "track_number" : 15,
      "type" : "track",
      "uri" : "spotify:track:7hDXp1xU9PGPSXsdt63J91"
    }

    items.push(trackOne);
    items.push(trackTwo);
    const filtered = pipe.transform(items, '200 copas');
    expect(filtered.length).toBe(1);
  });
});
