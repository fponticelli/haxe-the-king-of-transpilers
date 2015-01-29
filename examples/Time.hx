class Time {
  macro public static function stamp() {
    var t = Date.now().toString();
    return macro $v{t};
  }
}