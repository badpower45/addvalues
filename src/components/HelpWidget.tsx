import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function HelpWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Help Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, var(--success-green), #059669)',
          color: 'white',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Need help? Chat with us"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Help Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-32 right-8 z-50 w-96 max-w-[calc(100vw-4rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className="border-0 overflow-hidden"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              }}
            >
              <div
                className="p-6"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                  color: 'white',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: 'var(--font-arabic-heading)',
                  }}
                >
                  هل تحتاج مساعدة؟
                </h3>
                <p style={{ fontSize: '14px', opacity: '0.9' }}>
                  We're here to help you!
                </p>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <p
                    style={{
                      color: 'var(--tech-gray)',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      fontFamily: 'var(--font-arabic-body)',
                    }}
                  >
                    أرسل لنا رسالتك وسنتواصل معك في أقرب وقت
                  </p>

                  <Input placeholder="اسمك / Your name" />
                  <Input type="email" placeholder="بريدك الإلكتروني / Email" />
                  <Textarea
                    placeholder="كيف يمكننا مساعدتك؟ / How can we help?"
                    rows={3}
                  />

                  <Button
                    className="w-full"
                    style={{
                      background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                      color: 'white',
                      fontFamily: 'var(--font-arabic-body)',
                    }}
                  >
                    <span className="flex items-center gap-2">
                      إرسال | Send
                      <Send size={16} />
                    </span>
                  </Button>

                  <div className="text-center pt-4 border-t">
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'var(--tech-gray)',
                        fontFamily: 'var(--font-arabic-body)',
                      }}
                    >
                      أو اتصل بنا على:{' '}
                      <a
                        href="tel:+20xxxxxxxxx"
                        style={{ color: 'var(--codepulse-blue)', fontWeight: '600' }}
                      >
                        +20 xxx xxx xxxx
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}