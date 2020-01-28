import { SelectedStateService } from './selected-state.service';

describe('SelectedStateService', () => {
  let service: SelectedStateService;
  beforeEach(() => { service = new SelectedStateService(); });

  it('#getSelectedCount should return 0', () => {
      expect(service.getSelectedCount()).toBe(0);
  });

  it('check select one', () => {
      service.select('one');
      expect(service.getSelectedCount()).toBe(1);
      expect(service.isSelected('one')).toBe(true);
  });
  it('check clear selected', () => {
      service.clear();
      expect(service.getSelectedCount()).toBe(0);
  });
  it('check unselect', () => {
      service.select('one');
      service.unselect('one');
      expect(service.isSelected('one')).toBe(false);
  });
});
