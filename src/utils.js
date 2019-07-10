export const TO_DO_STATE = {
    COMPLETE: 'COMPLETE',
    UN_COMPLETE: 'UN_COMPLETE',
    DELETED: 'DELETED',
};

export const TO_DO_FILTER = {
    ALL: 'ALL',
    ...TO_DO_STATE,
};

// METHODS
export const getRandNumber = () => (Math.random() * 100000000000000000).toString();
