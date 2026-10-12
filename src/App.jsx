import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import CounterPage from './pages/CounterPage';
import CustomModal from './components/CustomModel';

function App() {
  const [activeMenu, setActiveMenu] = useState('Counter Test Page');
  const [counter, setCounter] = useState(0);
  
  // कस्टम मॉडल को कंट्रोल करने की स्टेट्स
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingMenu, setPendingMenu] = useState(null);

  // साइडबार क्लिक हैंडलर
  const handleMenuChange = (targetMenu) => {
    // अगर यूज़र उसी पेज पर क्लिक कर रहा है जो खुला है, तो कुछ मत करो
    if (activeMenu === targetMenu) return;

    // 💡 अगर काउंटर 8 है, तो डायरेक्ट जाने से रोकें और कस्टम मॉडल दिखाएं
    if (counter === 8) {
      setPendingMenu(targetMenu); // याद रखें कि यूज़र कहाँ जाना चाहता था
      setIsModalOpen(true);       // मॉडल ओपन करें
    } else {
      setActiveMenu(targetMenu);  // नॉर्मल नेविगेशन (अगर काउंटर 8 नहीं है)
    }
  };

  // मॉडल में "Leave Anyway" क्लिक करने पर
  const confirmLeave = () => {
    if (pendingMenu) {
      setActiveMenu(pendingMenu);
      setCounter(0); // नया पेज लोड होने पर काउंटर रिसेट कर देते हैं
    }
    setIsModalOpen(false);
    setPendingMenu(null);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* 1. साइडबार कॉम्पोनेंट */}
      <Sidebar currentMenu={activeMenu} onMenuClick={handleMenuChange} />

      {/* 2. मेन कंटेंट एरिया */}
      <main style={{ flex: 1, padding: '40px', backgroundColor: '#f8f9fa' }}>
        {activeMenu === 'Counter Test Page' ? (
          <CounterPage counter={counter} setCounter={setCounter} />
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Welcome to {activeMenu}</h2>
            <p>This is a temporary blank screen for demonstration.</p>
          </div>
        )}
      </main>

      {/* 3. कस्टम मॉडल कॉम्पोनेंट */}
      <CustomModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={confirmLeave} 
      />
    </div>
  );
}

export default App;
