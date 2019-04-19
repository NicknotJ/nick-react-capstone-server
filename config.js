'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://codern:password123@ds137255.mlab.com:37255/react-capstone-pain-journal' //'mongodb://localhost/pain-journal';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/pain-journal';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
exports.SITES = process.env.SITES || '*';