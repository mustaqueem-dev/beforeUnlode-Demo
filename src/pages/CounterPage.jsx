import React, { useEffect } from 'react';

function CounterPage({ counter, setCounter }) {
  
  // 🌐 ब्राउज़र रिफ्रेश रोकने के लिए (Browser Native Refresh/Close Warning)
  useEffect(() => {
    if (counter !== 8) return;

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [counter]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter Logic Page</h2>
      <p>Click the button. When it reaches <b>8</b>, leaving the page or refreshing will trigger a warning.</p>
      
      <div style={{ margin: '30px 0' }}>
        <button 
          onClick={() => setCounter(prev => prev + 1)}
          style={styles.btn}
        >
          Count: {counter}
        </button>
      </div>

      <p style={{ fontWeight: 'bold', color: counter === 8 ? '#d32f2f' : '#2e7d32' }}>
        {counter === 8 
          ? '⚠️ Counter is 8! Try clicking another menu or refreshing the browser.' 
          : `Current Status: Safe (Count is ${counter})`}
      </p>
    </div>
  );
}

const styles = {
  btn: { padding: '12px 24px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px' }
};

export default CounterPage;
