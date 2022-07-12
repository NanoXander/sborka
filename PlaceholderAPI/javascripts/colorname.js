JavaScript:
function check() {

  switch ("%player_world%") {
    case 'world':
      return "\u00D2";
    case 'world_nether':
      return "\u00C0";
    case 'world_the_end':
      return "\u00CA";
    default:
      return "&7";
  }
}
check();