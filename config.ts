{
  /* secret key to genereta access token */
  secretKey: 'LASTRIAIPAKEKODELASTRI-2025',
  host: 'https://wppconnect-server-production-6561.up.railway.app',
  port: '21465',
  // Device name for show on whatsapp device
  deviceName: 'WppConnect',
  poweredBy: 'WPPConnect-Server',
  // starts all sessions when starting the server.
  startAllSession: true,
  tokenStoreType: 'file',
  // sets the maximum global listeners. 0 = infinity.
  maxListeners: 15,
  // create userDataDir for each puppeteer instance for working with Multi Device
  customUserDataDir: './userDataDir/',
  webhook: {
    // set default webhook
    url: null,
    // automatically downloads files to upload to the webhook
    autoDownload: true,
    // enable upload to s3
    uploadS3: false,
    // set default bucket name on aws s3
    awsBucketName: null,
    //marks messages as read when the webhook returns ok
    readMessage: true,
    //sends all unread messages to the webhook when the server starts
    allUnreadOnStart: false,
    // send all events of message status (read, sended, etc)
    listenAcks: true,
    // send all events of contacts online or offline for webook and socket
    onPresenceChanged: true,
    // send all events of groups participants changed for webook and socket
    onParticipantsChanged: true,
    // send all events of reacted messages for webook and socket
    onReactionMessage: true,
    // send all events of poll messages for webook and socket
    onPollResponse: true,
    // send all events of revoked messages for webook and socket
    onRevokedMessage: true,
    // send all events of labels for webook and socket
    onLabelUpdated: true,
    // 'event', 'from' ou 'type' to ignore and not send to webhook
    ignore: [],
  },
  websocket: {
    // Just leave one active, here or on webhook.autoDownload
    autoDownload: false,
    // Just leave one active, here or on webhook.uploadS3, to avoid duplication in S3
    uploadS3: false,
  },
  // send data to chatwoot
  chatwoot: {
    sendQrCode: true,
    sendStatus: true,
  },
  //functionality that archives conversations, runs when the server starts
  archive: {
    enable: false,
    //maximum interval between filings.
    waitTime: 10,
    daysToArchive: 45,
  },
  log: {
    level: 'silly', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file'],
  },
  // create options for using on wppconnect-lib
  createOptions: {
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-web-security',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
      '--disable-features=LeakyPeeker' // Disable the browser's sleep mode when idle, preventing the browser from going into sleep mode, this is useful for WhatsApp not to be in economy mode in the background, avoiding possible crashes
    ],
  },
  mapper: {
    enable: false,
    prefix: 'tagone-',
  },
  // Configurations for connect with database
  db: {
    mongodbDatabase: 'tokens',
    mongodbCollection: '',
    mongodbUser: '',
    mongodbPassword: '',
    mongodbHost: '',
    mongoIsRemote: true,
    mongoURLRemote: '',
    mongodbPort: 27017,
    redisHost: 'localhost',
    redisPort: 6379,
    redisPassword: '',
    redisDb: 0,
    redisPrefix: 'docker',
  },
  // Your configurations yo upload on AWS
  aws_s3: {
    region: 'sa-east-1',
    access_key_id: '',
    secret_key: '',
    // If you already have a bucket created that will be used. Will bestored: you-default-bucket/{session}/{filename}
    defaultBucketName: ''
  },
}