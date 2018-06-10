import { customerData as mockData } from '../../../mocks/customerProfileMocks';
import { CustomerProfileApiService } from './service';
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

describe('CustomerProfileApiService', () => {
  let subject: CustomerProfileApiService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerProfileApiService,
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

  beforeEach(inject([CustomerProfileApiService, MockBackend], (CustomerProfileApiService, mockBackend) => {
    subject = CustomerProfileApiService;
    backend = mockBackend;
  }));

  xit('should get portfolio summary data', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toContain('assets/customerProfileMock.json');
      const options = new ResponseOptions({ body: mockData });
      connection.mockRespond(new Response(options));
    });

    subject.getCustomerProfile().subscribe((response) => {
      expect(response).toEqual(mockData);
    });
  });

});
