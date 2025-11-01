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
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-xl"
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
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Help Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]"
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
                className="p-4"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                  color: 'white',
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    fontFamily: 'var(--font-arabic-heading)',
                  }}
                >
                  هل تحتاج مساعدة؟
                </h3>
                <p style={{ fontSize: '12px', opacity: '0.9' }}>
                  We're here to help you!
                </p>
              </div>

              <CardContent className="p-4">
                <div className="space-y-4">
                  <p
                    style={{
                      color: 'var(--tech-gray)',
                      fontSize: '12px',
                      lineHeight: '1.6',
                      fontFamily: 'var(--font-arabic-body)',
                    }}
                  >
                    أرسل لنا رسالتك وسنتواصل معك في أقرب وقت
                  </p>

                  <Input placeholder="اسمك / Your name" className="text-sm" />
                  <Input type="email" placeholder="بريدك الإلكتروني / Email" className="text-sm" />
                  <Textarea
                    placeholder="كيف يمكننا مساعدتك؟ / How can we help?"
                    rows={2}
                    className="text-sm"
                  />

                  <Button
                    className="w-full text-sm h-9"
                    style={{
                      background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                      color: 'white',
                      fontFamily: 'var(--font-arabic-body)',
                    }}
                  >
                    <span className="flex items-center gap-2">
                      إرسال | Send
                      <Send size={14} />
                    </span>
                  </Button>

                  <div className="text-center pt-3 border-t">
                    <p
                      style={{
                        fontSize: '11px',
                        color: 'var(--tech-gray)',
                        fontFamily: 'var(--font-arabic-body)',
                      }}
                    >
                      أو اتصل بنا على:{' '}
                      <a
                        href="tel:+201222239382"
                        style={{ color: 'var(--codepulse-blue)', fontWeight: '600' }}
                      >
                        +201222239382
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