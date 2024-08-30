export interface DraftOrderDataType {
  key: React.Key;
  id: string;
  type: string;
  customer: string;
  shipLocation: string;
  payStatus: string;
  staffCharge: string;
  total: string;
}

export interface RequestOrderDataType {
  key: React.Key;
  id: string;
  type: string;
  customer: string;
  shipLocation: string;
  status: string;
  date: string;
  staffCharge: string;
}

export interface ConfirmOrderDataType {
  key: React.Key;
  id: string;
  type: string;
  shipId: string;
  customer: string;
  shipLocation: string;
  status: string;
  date: string;
  payStatus: string;
  staffCharge: string;
  packaging: string;
  total: string;
}