import { CmsApiService } from './service';
import { cmsData as mockContent } from '../../../mocks/cmsDataMocks';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';

describe('CmsApiService', () => {
  let subject: CmsApiService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CmsApiService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
    });
  });

  beforeEach(inject([CmsApiService, MockBackend], (httpService, mockBackend) => {
    subject = httpService;
    backend = mockBackend;
  }));

  it('should get CMS data', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: mockContent });
      connection.mockRespond(new Response(options));
    });
    subject.getContent().subscribe((response) => {
      expect(response).toEqual(mockContent);
    });
  });
});
