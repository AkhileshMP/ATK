type State = {
    isConnected: boolean;
    attendanceList: any[];
};

const types = {
    SET_NETWORK_INFO: 'SET_NETWORK_INFO',
    SET_ATTENDANCE_DATA: 'SET_ATTENDANCE_DATA',
    CLEAR_ATTENDANCE_DATA: 'CLEAR_ATTENDANCE_DATA'
};

export const actions = {
    setNetwork: (isConnected: boolean) => {
        return { type: types.SET_NETWORK_INFO, isConnected };
    },
    setAttendanceData: (attendanceList: any[]) => {
        return { type: types.SET_ATTENDANCE_DATA, attendanceList };
    },
    clearAttendanceData: () => {
        return { type: types.CLEAR_ATTENDANCE_DATA };
    }
};

const initialState: State = {
    isConnected: true,
    attendanceList: []
};

export const reducer = (state = initialState, action: any): State => {
    const { type, isConnected, attendanceList } = action;
    switch (type) {
        case types.SET_NETWORK_INFO:
            return { ...state, isConnected };  
        case types.SET_ATTENDANCE_DATA:
            return { ...state, attendanceList };  
        case types.CLEAR_ATTENDANCE_DATA:
            return { 
                ...state, 
                attendanceList: [] 
            };     
        default:
            return state;
    }
};

