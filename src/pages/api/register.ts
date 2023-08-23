import { NextApiRequest, NextApiResponse } from 'next';
import { googleSheetCredential } from '@src/utils/const/googlesheet-env';
import { google } from 'googleapis';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      await writeRow2(request.body.email);
      return response.status(200).json({ success: true });
    }
  } catch (error) {
    return response.status(500).json({ error: 'Internal server error' });
  }

  return response.status(200).json({ success: true });
}

export const writeRow2 = async (email: string) => {
  const now = new Date();
  const dateString = `${now.toDateString()} ${now.toTimeString()}`;
  const authorize = new google.auth.JWT(
    googleSheetCredential.client_email,
    undefined,
    googleSheetCredential.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );
  // google spread sheet api 가져오기
  const googleSheet = google.sheets({
    version: 'v4',
    auth: authorize,
  });
  // const context = await googleSheet.spreadsheets.values.get({
  //   spreadsheetId: '1u1gRgpx7PEKYkG8VPfqQZQ2BI5c2OHaj0UnYs5uaQ6E',
  //   range: 'A1:A3',
  // });
  googleSheet.spreadsheets.values.append({
    spreadsheetId: '1u1gRgpx7PEKYkG8VPfqQZQ2BI5c2OHaj0UnYs5uaQ6E',
    range: 'A:B',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[email, dateString]] },
  });
};
