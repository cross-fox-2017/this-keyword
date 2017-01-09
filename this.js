"use strict"

// GLOBAL CONTEXT
Didit Suryadi@DESKTOP-OS9NUL3 MINGW64 ~/Desktop/this-keyword (didietsuryadi)
$ node
> this
{ DTRACE_NET_SERVER_CONNECTION: [Function],
  DTRACE_NET_STREAM_END: [Function],
  DTRACE_HTTP_SERVER_REQUEST: [Function],
  DTRACE_HTTP_SERVER_RESPONSE: [Function],
  DTRACE_HTTP_CLIENT_REQUEST: [Function],
  DTRACE_HTTP_CLIENT_RESPONSE: [Function],
  COUNTER_NET_SERVER_CONNECTION: [Function],
  COUNTER_NET_SERVER_CONNECTION_CLOSE: [Function],
  COUNTER_HTTP_SERVER_REQUEST: [Function],
  COUNTER_HTTP_SERVER_RESPONSE: [Function],
  COUNTER_HTTP_CLIENT_REQUEST: [Function],
  COUNTER_HTTP_CLIENT_RESPONSE: [Function],
  global: [Circular],
  process:
   process {
     title: ' ',
     version: 'v6.9.1', //version node js
     moduleLoadList:
      [ 'Binding contextify',
        'Binding natives',
        'NativeModule events',
        'NativeModule util',
        'Binding uv',
        'NativeModule buffer',
        'Binding buffer',
        'Binding util',
        'NativeModule internal/util',
        'NativeModule timers',
        'Binding timer_wrap',
        'NativeModule internal/linkedlist',
        'NativeModule assert',
        'NativeModule internal/process',
        'Binding config',
        'NativeModule internal/process/warning',
        'NativeModule internal/process/next_tick',
        'NativeModule internal/process/promises',
        'NativeModule internal/process/stdio',
        'Binding constants',
        'NativeModule tty',
        'NativeModule net',
        'NativeModule stream',
        'NativeModule _stream_readable',
        'NativeModule internal/streams/BufferList',
        'NativeModule _stream_writable',
        'NativeModule _stream_duplex',
        'NativeModule _stream_transform',
        'NativeModule _stream_passthrough',
        'NativeModule internal/net',
        'Binding cares_wrap',
        'Binding tty_wrap',
        'Binding tcp_wrap',
        'Binding pipe_wrap',
        'Binding stream_wrap',
        'NativeModule internal/repl',
        'NativeModule readline',
        'NativeModule internal/readline',
        'NativeModule repl',
        'NativeModule internal/module',
        'NativeModule vm',
        'NativeModule path',
        'NativeModule fs',
        'Binding fs',
        'Binding fs_event_wrap',
        'NativeModule console',
        'Binding signal_wrap',
        'NativeModule module',
        'NativeModule domain',
        'NativeModule os',
        'Binding os',
        'NativeModule string_decoder' ],
     versions:
      { http_parser: '2.7.0',
        node: '6.9.1',
        v8: '5.1.281.84',
        uv: '1.9.1',
        zlib: '1.2.8',
        ares: '1.10.1-DEV',
        icu: '57.1',
        modules: '48',
        openssl: '1.0.2j' },
     arch: 'x64',
     platform: 'win32',
     release:
      { name: 'node',
        lts: 'Boron',
        sourceUrl: 'https://nodejs.org/download/release/v6.9.1/node-v6.9.1.tar.g
z',
        headersUrl: 'https://nodejs.org/download/release/v6.9.1/node-v6.9.1-head
ers.tar.gz',
        libUrl: 'https://nodejs.org/download/release/v6.9.1/win-x64/node.lib' },

     argv: [ 'C:\\Program Files\\nodejs\\node.exe' ],
     execArgv: [],
     env:
      { ACLOCAL_PATH: '/mingw64/share/aclocal:/usr/share/aclocal',
        ALLUSERSPROFILE: 'C:\\ProgramData',
        APPDATA: 'C:\\Users\\Didit Suryadi\\AppData\\Roaming',
        COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
        'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
        CommonProgramW6432: 'C:\\Program Files\\Common Files',
        COMPUTERNAME: 'DESKTOP-OS9NUL3',
        COMSPEC: 'C:\\WINDOWS\\system32\\cmd.exe',
        DISPLAY: 'needs-to-be-defined',
        EXEPATH: 'C:\\Program Files\\Git',
        FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
        FPS_BROWSER_USER_PROFILE_STRING: 'Default',
        HOME: 'C:\\Users\\Didit Suryadi',
        HOMEDRIVE: 'C:',
        HOMEPATH: '\\Users\\Didit Suryadi',
        HOSTNAME: 'DESKTOP-OS9NUL3',
        INFOPATH: '/usr/local/info:/usr/share/info:/usr/info:/share/info:',
        LANG: 'en_US.UTF-8',
        LOCALAPPDATA: 'C:\\Users\\Didit Suryadi\\AppData\\Local',
        LOGONSERVER: '\\\\DESKTOP-OS9NUL3',
        MANPATH: '/mingw64/share/man:/usr/local/man:/usr/share/man:/usr/man:/sha
re/man:',
        MSYSTEM: 'MINGW64',
        NUMBER_OF_PROCESSORS: '4',
        OLDPWD: '/c/Users/Didit Suryadi/Desktop',
        OneDrive: 'C:\\Users\\Didit Suryadi\\OneDrive',
        OS: 'Windows_NT',
        PATH: 'C:\\Users\\Didit Suryadi\\bin;C:\\Program Files\\Git\\mingw64\\bi
n;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\P
rogram Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Fil
es\\Git\\usr\\bin;C:\\Users\\Didit Suryadi\\bin;C:\\ProgramData\\Oracle\\Java\\j
avapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOW
S\\System32\\WindowsPowerShell\\v1.0;C:\\Program Files\\Git\\cmd;C:\\Program Fil
es\\nodejs;C:\\Users\\Didit Suryadi\\AppData\\Local\\Microsoft\\WindowsApps;C:\\
Users\\Didit Suryadi\\AppData\\Roaming\\npm;C:\\Users\\Didit Suryadi\\AppData\\L
ocal\\atom\\bin;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\
\Git\\usr\\bin\\core_perl',
        PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
        PKG_CONFIG_PATH: '/mingw64/lib/pkgconfig:/mingw64/share/pkgconfig',
        PLINK_PROTOCOL: 'ssh',
        PRINTER: 'Microsoft Print to PDF',
        PROCESSOR_ARCHITECTURE: 'AMD64',
        PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 58 Stepping 9, GenuineInte
l',
        PROCESSOR_LEVEL: '6',
        PROCESSOR_REVISION: '3a09',
        ProgramData: 'C:\\ProgramData',
        PROGRAMFILES: 'C:\\Program Files',
        'ProgramFiles(x86)': 'C:\\Program Files (x86)',
        ProgramW6432: 'C:\\Program Files',
        PS1: '\\[\\033]0;$TITLEPREFIX:${PWD//[^[:ascii:]]/?}\\007\\]\\n\\[\\033[
32m\\]\\u@\\h \\[\\033[35m\\]$MSYSTEM \\[\\033[33m\\]\\w\\[\\033[36m\\]`__git_ps
1`\\[\\033[0m\\]\\n$ ',
        PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS
\\system32\\WindowsPowerShell\\v1.0\\Modules',
        PT6HOME: 'C:\\Program Files (x86)\\Cisco Packet Tracer 6.2sv',
        PT7HOME: 'C:\\Program Files\\Cisco Packet Tracer 7.0',
        PUBLIC: 'C:\\Users\\Public',
        PWD: '/c/Users/Didit Suryadi/Desktop/this-keyword',
        SESSIONNAME: 'Console',
        SHELL: 'C:\\Program Files\\Git\\usr\\bin\\bash',
        SHLVL: '1',
        SSH_ASKPASS: '/mingw64/libexec/git-core/git-gui--askpass',
        SYSTEMDRIVE: 'C:',
        SYSTEMROOT: 'C:\\WINDOWS',
        TEMP: 'C:\\Users\\DIDITS~1\\AppData\\Local\\Temp',
        TMP: 'C:\\Users\\DIDITS~1\\AppData\\Local\\Temp',
        TMPDIR: 'C:\\Users\\DIDITS~1\\AppData\\Local\\Temp',
        USERDOMAIN: 'DESKTOP-OS9NUL3',
        USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-OS9NUL3',
        USERNAME: 'Didit Suryadi',
        USERPROFILE: 'C:\\Users\\Didit Suryadi',
        WINDIR: 'C:\\WINDOWS',
        _: '/usr/bin/winpty' },
     pid: 5816,
     features:
      { debug: false,
        uv: true,
        ipv6: true,
        tls_npn: true,
        tls_alpn: true,
        tls_sni: true,
        tls_ocsp: true,
        tls: true },
     _needImmediateCallback: false,
     execPath: 'C:\\Program Files\\nodejs\\node.exe',
     debugPort: 5858,
     _startProfilerIdleNotifier: [Function: _startProfilerIdleNotifier],
     _stopProfilerIdleNotifier: [Function: _stopProfilerIdleNotifier],
     _getActiveRequests: [Function: _getActiveRequests],
     _getActiveHandles: [Function: _getActiveHandles],
     reallyExit: [Function: reallyExit],
     abort: [Function: abort],
     chdir: [Function: chdir],
     cwd: [Function: cwd],
     umask: [Function: umask],
     _kill: [Function: _kill],
     _debugProcess: [Function: _debugProcess],
     _debugPause: [Function: _debugPause],
     _debugEnd: [Function: _debugEnd],
     hrtime: [Function: hrtime],
     cpuUsage: [Function: cpuUsage],
     dlopen: [Function: dlopen],
     uptime: [Function: uptime],
     memoryUsage: [Function: memoryUsage],
     binding: [Function: binding],
     _linkedBinding: [Function: _linkedBinding],
     _events:
      { warning: [Function],
        newListener: [Function],
        removeListener: [Function],
        SIGWINCH: [Object] },
     _rawDebug: [Function],
     _eventsCount: 4,
     domain: [Getter/Setter],
     _maxListeners: undefined,
     _fatalException: [Function],
     _exiting: false,
     assert: [Function],
     config: { target_defaults: [Object], variables: [Object] },
     emitWarning: [Function],
     nextTick: [Function: nextTick],
     _tickCallback: [Function: _tickDomainCallback],
     _tickDomainCallback: [Function: _tickDomainCallback],
     stdout: [Getter],
     stderr: [Getter],
     stdin: [Getter],
     openStdin: [Function],
     exit: [Function],
     kill: [Function],
     argv0: 'node.exe' },
  Buffer:
   { [Function: Buffer]
     poolSize: 8192,
     from: [Function],
     alloc: [Function],
     allocUnsafe: [Function],
     allocUnsafeSlow: [Function],
     isBuffer: [Function: isBuffer],
     compare: [Function: compare],
     isEncoding: [Function],
     concat: [Function],
     byteLength: [Function: byteLength] },
  clearImmediate: [Function],
  clearInterval: [Function],
  clearTimeout: [Function],
  setImmediate: [Function],
  setInterval: [Function],
  setTimeout: [Function],
  console: [Getter],
  module:
   Module {
     id: '<repl>',
     exports: {},
     parent: undefined,
     filename: null,
     loaded: false,
     children: [],
     paths:
      [ 'C:\\Users\\Didit Suryadi\\Desktop\\this-keyword\\repl\\node_modules',
        'C:\\Users\\Didit Suryadi\\Desktop\\this-keyword\\node_modules',
        'C:\\Users\\Didit Suryadi\\Desktop\\node_modules',
        'C:\\Users\\Didit Suryadi\\node_modules',
        'C:\\Users\\node_modules',
        'C:\\node_modules',
        'C:\\Users\\Didit Suryadi\\.node_modules',
        'C:\\Users\\Didit Suryadi\\.node_libraries',
        'C:\\Program Files\\lib\\node' ] },
  require:
   { [Function: require]
     resolve: [Function: resolve],
     main: undefined,
     extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
     cache: {} } }


iya, terdapat versi node jsnya version: 'v6.9.1'

// CLASS CONTEXT

class Siswa {
  constructor(murid){
    this.nama = murid.nama
    this.umur = murid.umur
    this.batch= murid.batch

  }

  biodata(){
    return `Nama ${this.nama}, Umur ${this.umur}, Batch : ${this.batch}`
  }

}

var didit = new Siswa({nama : `Didit Suryadi`, umur : `21thn`, batch : `3`})

console.log(didit.biodata());
console.log(didit.nama);

// RELEASE 1

// Penjelasan yang tangkap penggunaan this adalah perwakilan dari sebuah object didalam class, seperti contoh yang saya buat diatas, setiap penggunaan this makan akan terpanggil attribut dari object tersebut.
