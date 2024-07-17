import create from 'zustand';

const useModalStore = create((set) => ({
  modalContent: {
    content: '',
    buttons: [],
    buttonPosition: 'bottom',
    isOpen: false,
  },

  openModal: (content, buttons, buttonPosition = 'bottom') => {
    console.log('Opening modal:', content, buttons, buttonPosition);
    set({
      modalContent: {
        content,
        buttons,
        buttonPosition,
        isOpen: true,
      },
    });
  },

  closeModal: () =>
    set((state) => ({
      modalContent: {
        ...state.modalContent,
        isOpen: false,
      },
    })),
}));

export default useModalStore;
