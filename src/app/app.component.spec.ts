import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VideosTableComponent } from './modules/videos-table/components/videos-table/videos-table.component';
import { VideosTableModule } from './modules/videos-table/videos-table.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        VideosTableModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as searchText 'AngularAgGrid'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.searchText).toEqual('Iron Maiden');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content h1').textContent).toContain('angular-ag-grid app!');
  });
});
