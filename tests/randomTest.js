const root = require( 'path' ).relative( process.cwd(), __dirname ) || '.';

require( 'child_process' ).fork( `${ root }/utils/lint-and-test.js` )
      .on( 'close', require( './utils/start-git-watch-loop' ) );
