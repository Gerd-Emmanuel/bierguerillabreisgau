export abstract class DarkMode {
  darkmodeIsActive(): boolean {
    let item = localStorage.getItem('darkmode');
    if (item === undefined || item === null) {
      localStorage.setItem('darkmode', false.toString());
    }

    return Boolean(item);
  }

  toggleDarkmode(): void {
    let item = localStorage.getItem('darkmode');
    localStorage.setItem('darkmode', (!Boolean(item)).toString());
  }

}
