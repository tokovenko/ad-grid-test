import { Injectable } from '@angular/core';

@Injectable()
export class SelectedStateService {
  private selected = new Map();

  getSelectedCount(): number {
    return this.selected.size;
  }

  toggle(id: string, isSelected: boolean) {
    if (isSelected) {
      this.select(id);
    } else {
      this.unselect(id);
    }
  }

  isSelected(id: string): boolean {
    return this.selected.has(id);
  }

  select(id: string) {
    this.selected.set(id, true);
  }

  unselect(id: string) {
    this.selected.delete(id);
  }

  clear() {
    this.selected.clear();
  }
}
