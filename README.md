# Wheel App

React ile geliştirilmiş bir **Hediye Çarkı uygulaması**.  
Kullanıcı çarkı çevirerek ödüller kazanabilir. Çark dönüşü ve geri sayım mekanizması **localStorage** ile yönetilir.  

---

## Özellikler

- Animasyonlu çark dönüşü (Framer Motion kullanıldı).  
- Ödüller dinamik olarak tanımlanabilir.  
- Çark çevirme butonu geri sayım ile tekrar kullanım için kilitlenir.  
- Kazanılan ödül kullanıcıya gösterilir.  
- Modüler component yapısı:
  - `WheelSvg` → Çarkın görseli
  - `WheelArrow` → Çark üzerindeki ok
  - `SpinButton` → Spin butonu
  - `WinningItem` → Kazanılan ödül gösterimi
  - `WheelTitle` → Çark başlığı ve açıklaması
  - `Wheel.module.css` → Stillerin yer aldığı css dosyası
  - `Wheel` → Çark sisteminin bütünü

---

## Kurulum

1. Depoyu klonla ve proje dizinine gel:
    --> Git Bash veya CMD ile:

    git clone <repo-link>
    cd wheel-app

2. Gerekli paketleri yükle:
    npm install

3. Projeyi Başlat:
    npm run dev

43. Tarayıcıda aç: 
    - Local:        http://localhost:3000
    - Network:      http://192.168.1.6:3000

---

# Kullanım

 * Çevir butonuna tıklayınca çark döner ve geri sayım başlar.
 * Geri sayım bitene kadar buton tekrar kullanılamaz.
 * Kazanılan ödül çark animasyonu bitişinde gösterilir.

# Notlar

 * Çark boyutu ve dilim sayısı props ile değiştirilebilir (WheelSvg).
 * Dilim sayısı çarktaki ödül sayısına eşittir.
 * Animasyon ve geri sayım süresi useWheelLogic ve useCountDown hook’larında ayarlanabilir.
 * LocalStorage kullanımı demo amaçlıdır, backend ile entegre edilebilecek şekilde kurgulanmıştır.

