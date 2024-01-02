import * as BackgroundFetch from "expo-background-fetch";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";
import getRandomWord from "../firebaseFunctions/getRandomWord";
const taskName = "BACKGROUND_NOTIFICATION_TASK";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function scheduleNotification() {
  const randomWord = await getRandomWord(
    "gruplar",
    "kelimeler",
    "Veriler",
    "IsDunyasi"
  );
  console.log(randomWord);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: randomWord
        ? `Yeni Kelime: ${randomWord.ingilizce}`
        : "Kelime Getirilemedi",
      body: randomWord
        ? `Kelime: ${randomWord.ingilizce}  Kelimenin Anlamı: ${randomWord.turkce}`
        : "Bu bir arka plan bildirimidir.",
    },
    trigger: null,
  });
}

export async function registerBackgroundTask() {
  try {
    await BackgroundFetch.registerTaskAsync(taskName, {
      minimumInterval: 2 * 60, // 15 dakika çekeceğim
      stopOnTerminate: false,
      startOnBoot: true,
    });
    const now = Date.now();

    console.log(
      `Got background fetch call at date: ${new Date(now).toISOString()}`
    );
    console.log("task tanımladı");
    console.log("Arka plan görevi başarıyla kaydedildi");
  } catch (err) {
    console.log("Arka plan görevi kaydedilemedi", err);
  }
}

export async function unregisterBackgroundTask() {
  await BackgroundFetch.unregisterTaskAsync(taskName);
  console.log("Arka plan görevi başarıyla silindi");
}

// Arka plan görevinin tanımlanması
TaskManager.defineTask(taskName, async () => {
  const now = Date.now();

  console.log(
    `Got background fetch call at date: ${new Date(now).toISOString()}`
  );
  console.log("task tamamlandı");
  await scheduleNotification();
  return BackgroundFetch.BackgroundFetchResult.NewData;
});
