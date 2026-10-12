import { createThirdwebClient } from "thirdweb";
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "5338503cb44eaa9fd1a28acd6795ff3d", 
});

const wallets = [
  inAppWallet({
    auth: {
      options: ["google"],
    },
  }),
];

// Настраиваем тему под startup-course (светлая тема + изумрудный акцент)
const customTheme = lightTheme({
  colors: {
    primaryButtonBg: "#007A6A", // Тот самый бирюзовый/изумрудный цвет с сайта
    primaryButtonText: "#FFFFFF",
  },
});

export default function App() {
  const account = useActiveAccount();

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#F5F5F9', // Светлый фон с легким оттенком как на сайте
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px'
    }}>
      
      <div style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
        border: 'none',
        textAlign: 'center', 
        width: '100%', 
        maxWidth: '420px',
        color: '#000000'
      }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            margin: '0 0 12px 0', 
            fontSize: '36px', 
            fontWeight: '900', 
            letterSpacing: '-1px',
            color: '#1A1A1A'
          }}>
            Omni<span style={{ color: '#007A6A' }}>Badge</span>
          </h1>
          <p style={{ margin: '0', fontSize: '16px', color: '#4B5563', lineHeight: '1.5', fontWeight: '500' }}>
            Платформа цифровых достижений.<br/>Войдите через Google для активации.
          </p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <ConnectButton
            client={client}
            wallets={wallets}
            theme={customTheme}
            connectModal={{ size: "compact" }}
          />
        </div>

        {account && (
          <div style={{ 
            marginTop: '28px', 
            padding: '20px', 
            backgroundColor: '#F0FDF4', 
            border: '2px solid #007A6A',
            borderRadius: '16px', 
            textAlign: 'left',
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '20px', marginRight: '10px' }}>✅</span>
              <h3 style={{ margin: '0', color: '#007A6A', fontSize: '16px', fontWeight: '700' }}>Профиль активирован</h3>
            </div>
            <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#007A6A' }}>
              Ваш публичный адрес на Solana:
            </p>
            <code style={{ 
              display: 'block', 
              backgroundColor: '#FFFFFF', 
              color: '#007A6A', 
              padding: '12px', 
              borderRadius: '10px', 
              fontSize: '12px', 
              wordBreak: 'break-all',
              border: '1px solid rgba(0, 122, 106, 0.2)',
              fontWeight: '600'
            }}>
              {account.address}
            </code>
          </div>
        )}
      </div>
    </div>
  );
}