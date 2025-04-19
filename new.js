const newsletterInfo = {
  newsletterJid: "120363401755639074@newsletter",
  newsletterName: "LOD MD FORWARD",
  serverMessageId: 999
};

function getContextInfo(messageId) {
  return {
    mentionedJid: [messageId], // Mentioned users or groups
    forwardingScore: 999,      // Forwarding count or score
    isForwarded: true,         // Whether the message is forwarded
    forwardedNewsletterMessageInfo: newsletterInfo // Newsletter metadata
  };
}

const exports = {
  getContextInfo: getContextInfo
};

module.exports = exports;
