import React from 'react';

function CustomModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={{ marginTop: 0, color: '#d32f2f' }}>⚠️ Leave Page?</h3>
        <p>Counter is exactly 8! Are you sure you want to change the menu option? Your data might be reset.</p>
        <div style={styles.btnContainer}>
          <button onClick={onClose} style={styles.cancelBtn}>Stay Here</button>
          <button onClick={onConfirm} style={styles.confirmBtn}>Leave Anyway</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: 1000
  },
  modal: {
    backgroundColor: '#fff', padding: '24px', borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)', maxWidth: '400px', width: '90%'
  },
  btnContainer: { display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' },
  cancelBtn: { padding: '8px 16px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#fff' },
  confirmBtn: { padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#d32f2f', color: '#fff' }
};

export default CustomModal;
