var config = {}

config.db = {
    "user": "visdial",
    "name": "visdial_chat",
    "pass": "ENTER_PASSWORD_HERE"
}

config.redis = {
    "port": 6379,
    "pass": "Awaaqa09876",
    "list": "visdial_queue"
}

config.root = '/path/to/visdial-amt-chat/nodejs/'

module.exports = config
