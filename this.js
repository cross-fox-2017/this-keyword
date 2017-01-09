"use strict"

// GLOBAL CONTEXT


// { global: [Circular],
//   process:
//    process {
//      title: 'node',
//      version: 'v6.9.4',
//      moduleLoadList:
//       [ 'Binding contextify',
//         'Binding natives',
//         'NativeModule events',
//         'NativeModule util',
//         'Binding uv',
//         'NativeModule buffer',
//         'Binding buffer',
//         'Binding util',
//         'NativeModule internal/util',
//         'NativeModule timers',
//         'Binding timer_wrap',
//         'NativeModule internal/linkedlist',
//         'NativeModule assert',
//         'NativeModule internal/process',
//         'Binding config',
//         'NativeModule internal/process/warning',
//         'NativeModule internal/process/next_tick',
//         'NativeModule internal/process/promises',
//         'NativeModule internal/process/stdio',
//         'Binding constants',
//         'NativeModule tty',
//         'NativeModule net',
//         'NativeModule stream',
//         'NativeModule _stream_readable',
//         'NativeModule internal/streams/BufferList',
//         'NativeModule _stream_writable',
//         'NativeModule _stream_duplex',
//         'NativeModule _stream_transform',
//         'NativeModule _stream_passthrough',
//         'NativeModule internal/net',
//         'Binding cares_wrap',
//         'Binding tty_wrap',
//         'Binding tcp_wrap',
//         'Binding pipe_wrap',
//         'Binding stream_wrap',
//         'NativeModule internal/repl',
//         'NativeModule readline',
//         'NativeModule internal/readline',
//         'NativeModule repl',
//         'NativeModule internal/module',
//         'NativeModule vm',
//         'NativeModule path',
//         'NativeModule fs',
//         'Binding fs',
//         'Binding fs_event_wrap',
//         'NativeModule console',
//         'Binding signal_wrap',
//         'NativeModule module',
//         'NativeModule domain',
//         'NativeModule os',
//         'Binding os',
//         'NativeModule string_decoder' ],
//      versions:
//       { http_parser: '2.7.0',
//         node: '6.9.4',
//         v8: '5.1.281.89',
//         uv: '1.9.1',
//         zlib: '1.2.8',
//         ares: '1.10.1-DEV',
//         icu: '56.1',
//         modules: '48',
//         openssl: '1.0.2j' },
//      arch: 'x64',
//      platform: 'linux',
//      release:
//       { name: 'node',
//         lts: 'Boron',
//         sourceUrl: 'https://nodejs.org/download/release/v6.9.4/node-v6.9.4.tar.gz',
//         headersUrl: 'https://nodejs.org/download/release/v6.9.4/node-v6.9.4-headers.tar.gz' },
//      argv: [ '/usr/bin/nodejs' ],
//      execArgv: [],
//      env:
//       { LC_PAPER: 'id_ID.UTF-8',
//         XDG_VTNR: '7',
//         SSH_AGENT_PID: '1662',
//         LC_ADDRESS: 'id_ID.UTF-8',
//         XDG_SESSION_ID: 'c2',
//         LC_MONETARY: 'id_ID.UTF-8',
//         XDG_GREETER_DATA_DIR: '/var/lib/lightdm-data/raditya',
//         GIO_LAUNCHED_DESKTOP_FILE_PID: '6932',
//         QT_STYLE_OVERRIDE: 'gtk',
//         TERM: 'xterm-256color',
//         SHELL: '/bin/bash',
//         XDG_MENU_PREFIX: 'gnome-',
//         VTE_VERSION: '4205',
//         QT_LINUX_ACCESSIBILITY_ALWAYS_ON: '1',
//         LC_NUMERIC: 'id_ID.UTF-8',
//         OLDPWD: '/home/raditya',
//         GTK_MODULES: 'gail:atk-bridge',
//         USER: 'raditya',
//         LS_COLORS: 'rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:',
//         QT_ACCESSIBILITY: '1',
//         LC_TELEPHONE: 'id_ID.UTF-8',
//         XDG_SESSION_PATH: '/org/freedesktop/DisplayManager/Session0',
//         XDG_SEAT_PATH: '/org/freedesktop/DisplayManager/Seat0',
//         SSH_AUTH_SOCK: '/run/user/1000/keyring/ssh',
//         DEFAULTS_PATH: '/usr/share/gconf/pantheon.default.path',
//         SESSION_MANAGER: 'local/radit26:@/tmp/.ICE-unix/1593,unix/radit26:/tmp/.ICE-unix/1593',
//         GIO_LAUNCHED_DESKTOP_FILE: '/usr/share/applications/org.pantheon.terminal.desktop',
//         XDG_CONFIG_DIRS: '/etc/xdg/xdg-pantheon:/etc/xdg',
//         PATH: '/home/raditya/bin:/home/raditya/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games',
//         DESKTOP_SESSION: 'pantheon',
//         GSETTINGS_SCHEMA_DIR: '/home/raditya/data',
//         QT_IM_MODULE: 'ibus',
//         LC_IDENTIFICATION: 'id_ID.UTF-8',
//         PWD: '/home/raditya/Desktop',
//         XDG_SESSION_TYPE: 'x11',
//         XMODIFIERS: '@im=ibus',
//         LANG: 'en_US.UTF-8',
//         GDM_LANG: 'en_US',
//         MANDATORY_PATH: '/usr/share/gconf/pantheon.mandatory.path',
//         LC_MEASUREMENT: 'id_ID.UTF-8',
//         NODE_PATH: '/usr/lib/nodejs:/usr/lib/node_modules:/usr/share/javascript',
//         GDMSESSION: 'pantheon',
//         XDG_SEAT: 'seat0',
//         HOME: '/home/raditya',
//         SHLVL: '1',
//         LANGUAGE: 'en_US',
//         GNOME_DESKTOP_SESSION_ID: 'this-is-deprecated',
//         XDG_SESSION_DESKTOP: 'pantheon',
//         LOGNAME: 'raditya',
//         PANTHEON_TERMINAL_ID: '3',
//         XDG_DATA_DIRS: '/usr/share/pantheon:/usr/local/share/:/usr/share/',
//         DBUS_SESSION_BUS_ADDRESS: 'unix:abstract=/tmp/dbus-zs661SpmLX,guid=0912fe28dae649be2348fce45872ec10',
//         LESSOPEN: '| /usr/bin/lesspipe %s',
//         GTK_CSD: '1',
//         PROMPT_COMMAND: '__bp_precmd_invoke_cmd; dbus-send --type=method_call --session --dest=org.pantheon.terminal /org/pantheon/terminal org.pantheon.terminal.ProcessFinished string:$PANTHEON_TERMINAL_ID string:"$(history 1 | cut -c 8-)" >/dev/null 2>&1;  __bp_interactive_mode;',
//         XDG_RUNTIME_DIR: '/run/user/1000',
//         DISPLAY: ':0',
//         XDG_CURRENT_DESKTOP: 'Pantheon',
//         LESSCLOSE: '/usr/bin/lesspipe %s %s',
//         LC_TIME: 'id_ID.UTF-8',
//         XAUTHORITY: '/home/raditya/.Xauthority',
//         LC_NAME: 'id_ID.UTF-8',
//         _: '/usr/bin/node' },
//      pid: 14586,
//      features:
//       { debug: false,
//         uv: true,
//         ipv6: true,
//         tls_npn: true,
//         tls_alpn: true,
//         tls_sni: true,
//         tls_ocsp: true,
//         tls: true },
//      _needImmediateCallback: false,
//      execPath: '/usr/bin/nodejs',
//      debugPort: 5858,
//      _startProfilerIdleNotifier: [Function: _startProfilerIdleNotifier],
//      _stopProfilerIdleNotifier: [Function: _stopProfilerIdleNotifier],
//      _getActiveRequests: [Function: _getActiveRequests],
//      _getActiveHandles: [Function: _getActiveHandles],
//      reallyExit: [Function: reallyExit],
//      abort: [Function: abort],
//      chdir: [Function: chdir],
//      cwd: [Function: cwd],
//      umask: [Function: umask],
//      getuid: [Function: getuid],
//      geteuid: [Function: geteuid],
//      setuid: [Function: setuid],
//      seteuid: [Function: seteuid],
//      setgid: [Function: setgid],
//      setegid: [Function: setegid],
//      getgid: [Function: getgid],
//      getegid: [Function: getegid],
//      getgroups: [Function: getgroups],
//      setgroups: [Function: setgroups],
//      initgroups: [Function: initgroups],
//      _kill: [Function: _kill],
//      _debugProcess: [Function: _debugProcess],
//      _debugPause: [Function: _debugPause],
//      _debugEnd: [Function: _debugEnd],
//      hrtime: [Function: hrtime],
//      cpuUsage: [Function: cpuUsage],
//      dlopen: [Function: dlopen],
//      uptime: [Function: uptime],
//      memoryUsage: [Function: memoryUsage],
//      binding: [Function: binding],
//      _linkedBinding: [Function: _linkedBinding],
//      _events:
//       { warning: [Function],
//         newListener: [Function],
//         removeListener: [Function],
//         SIGWINCH: [Object] },
//      _rawDebug: [Function],
//      _eventsCount: 4,
//      domain: [Getter/Setter],
//      _maxListeners: undefined,
//      _fatalException: [Function],
//      _exiting: false,
//      assert: [Function],
//      config: { target_defaults: [Object], variables: [Object] },
//      emitWarning: [Function],
//      nextTick: [Function: nextTick],
//      _tickCallback: [Function: _tickDomainCallback],
//      _tickDomainCallback: [Function: _tickDomainCallback],
//      stdout: [Getter],
//      stderr: [Getter],
//      stdin: [Getter],
//      openStdin: [Function],
//      exit: [Function],
//      kill: [Function],
//      argv0: 'node' },
//   Buffer:
//    { [Function: Buffer]
//      poolSize: 8192,
//      from: [Function],
//      alloc: [Function],
//      allocUnsafe: [Function],
//      allocUnsafeSlow: [Function],
//      isBuffer: [Function: isBuffer],
//      compare: [Function: compare],
//      isEncoding: [Function],
//      concat: [Function],
//      byteLength: [Function: byteLength] },
//   clearImmediate: [Function],
//   clearInterval: [Function],
//   clearTimeout: [Function],
//   setImmediate: [Function],
//   setInterval: [Function],
//   setTimeout: [Function],
//   console: [Getter],
//   module:
//    Module {
//      id: '<repl>',
//      exports: {},
//      parent: undefined,
//      filename: null,
//      loaded: false,
//      children: [],
//      paths:
//       [ '/home/raditya/Desktop/repl/node_modules',
//         '/home/raditya/Desktop/node_modules',
//         '/home/raditya/node_modules',
//         '/home/node_modules',
//         '/node_modules',
//         '/usr/lib/nodejs',
//         '/usr/lib/node_modules',
//         '/usr/share/javascript',
//         '/home/raditya/.node_modules',
//         '/home/raditya/.node_libraries',
//         '/usr/lib/node' ] },
//   require:
//    { [Function: require]
//      resolve: [Function: resolve],
//      main: undefined,
//      extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
//      cache: {} } }

// cara mendapatkan version node dengan command `this.process.version`


// CLASS CONTEXT
/**

// menggunakan contoh class dari challenge argument order dependency

class House {

  constructor(input) {
    this.address      = input['address']
    this.square_feet  = input['square_feet']
    this.num_bedrooms = input['num_bedrooms'] || 3
    this.num_baths    = input['num_baths' || 2]
    this.cost         = input['cost' || 320000]
    this.down_payment = input['down_payment'] || 0.20
    this.sold         = input['sold'] || false
    this.short_sale   = input['short_sale']
    this.has_tenants  = input['has_tenants'] || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${obscure_address} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} bath. ${cost}`
  }
}

**/

// RELEASE 1
// dalam node (REPL) this akan memanggil semua method (global)
// dalam class, this digunakan untuk assign variable. selain itu digunakan untuk memanggil object dalam class tersebut (tergantung siapa parent nya)
