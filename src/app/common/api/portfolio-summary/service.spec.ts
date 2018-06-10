import { customerData as mockData } from '../../../mocks/customerProfileMocks';
import { PortfolioSummaryApiService } from './service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';

class MockAuthService {
  getPartyId() {
    return 'testPartyId';
  }
}

class MockQueryParameterGenerator {
  getWithPartyId() { return 'mockText'; }
}

describe('PortfolioSummaryApiService', () => {
  let subject: PortfolioSummaryApiService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PortfolioSummaryApiService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          /*provide: AuthHttp,
          useFactory: (http) => {
            return new AuthHttp(new AuthConfig({
              tokenName: 'token',
              tokenGetter: (() => encodeTestToken(this)),
              globalHeaders: [{ 'Content-Type': 'application/json' }]
            }), http);
          },*/
          deps: [Http]
        },
        /*{ provide: AuthService, useClass: MockAuthService },
        { provide: QueryParameterGenerator, useClass: MockQueryParameterGenerator }*/
      ],
    });
  });

  beforeEach(inject([PortfolioSummaryApiService, MockBackend], (PortfolioSummaryApiService, mockBackend) => {
    subject = PortfolioSummaryApiService;
    backend = mockBackend;
  }));

  xit('should get portfolio summary data', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toContain('assets/portfolioSummary.json');
      const options = new ResponseOptions({ body: mockData });
      connection.mockRespond(new Response(options));
    });

    subject.getPortfolioSummaryData().subscribe((response) => {
      expect(response).toEqual(mockData);
    });
  });

});
