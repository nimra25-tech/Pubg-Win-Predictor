import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, roc_auc_score, classification_report

# Kaggle dataset load kar rahe hain (top 200,000 rows for fast execution)
df = pd.read_csv('/kaggle/input/competitions/pubg-finish-placement-prediction/train_V2.csv', nrows=200000)

# Top 10% players ko "win" (1) assign kar rahe hain
df['win'] = (df['winPlacePerc'] >= 0.9).astype(int)

# Features list jisme ab 'matchDuration' bhi shamil hai
features = ['kills', 'damageDealt', 'walkDistance', 'heals', 'boosts', 'matchDuration']

# Missing values wali rows drop karein
df = df.dropna(subset=features + ['win'])

X = df[features]
y = df['win']

# Data ko train aur test mein split karein (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Logistic Regression model initialize aur train karein
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Predictions aur probabilities
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)[:, 1]

# Evaluation Metrics print karein
print("Accuracy:", accuracy_score(y_test, y_pred))
print("ROC-AUC:", roc_auc_score(y_test, y_prob))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Coefficients jo frontend (script.js) mein use honge
print("\nBias (intercept):", model.intercept_[0])
for feat, coef in zip(features, model.coef_[0]):
    print(f"{feat}: {coef}")