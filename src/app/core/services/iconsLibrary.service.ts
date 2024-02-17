import { Injectable } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faPlus, fas } from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class IconLibraryService {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faPlus);
  }
}
