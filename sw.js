import { initFirebase } from './lib/firebase-config.js';
import { setupAuth, currentUser } from './modules/auth.js';
import { setupItems } from './modules/items.js';
import { setupStock } from './modules/stock.js';
// ...

const { db, auth } = initFirebase();

setupAuth(auth, async (user, role) => {
  if (!user) return showLogin();
  await loadUserData(user);
  setupItems(db);
  setupStock(db);
});
