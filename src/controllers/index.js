import { fetchData, sendMessageToOpenAI } from '@/configs/api'
import { sleep, showAlert } from '@/helpers';

export const postMessage = async (message) => {
    const result = await sendMessageToOpenAI(message);
    if(result){
        return result;
    }
}

export const copyToClipboard = async (value) => {
    try {
        await navigator.clipboard.writeText(value);
        console.log('Text copied to clipboard:', value);
        showAlert({ type: 'success', text: 'Success Copy CA' });
        return true;
    } catch (error) {
        console.error('Failed to copy text to clipboard:', error);
        return false;
    }
};
